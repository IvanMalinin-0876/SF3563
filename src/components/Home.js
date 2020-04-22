import React, { Component, } from 'react'
import { Card, Icon, List, StandardListItem, ValueState, ProgressIndicator, Title, TitleLevel, FlexBox, FlexBoxDirection, FlexBoxJustifyContent, FlexBoxWrap, AnalyticalTable } from '@ui5/webcomponents-react'
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import '@ui5/webcomponents-icons/dist/icons/line-chart.js';
import '@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js';
import "@ui5/webcomponents-icons/dist/icons/list.js";
import "@ui5/webcomponents-icons/dist/icons/table-view.js";



export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            chart: "barChart"
        }

    }

    handleHeaderClick = () => {
        this.setState({ loading: true })
        let chartSec = "lineChart";
        if (this.state.chart === "barChart")
            chartSec = "lineChart";
        else
            chartSec = "barChart";

        setTimeout(() => {
            this.setState({ chart: chartSec, loading: false })
        }, (2000));
    };


    handleProgressHeaderClick = () => {
        window.location.replace("#/detail");
    };

    render() {
        const datasets = [{
            label: "Stock Price",
            data: [65, 59, 80, 81, 56, 55, 40]
        }];
        const labels = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ];



        const tableData = new Array(500).fill(null).map((_, index) => {
            return {
                name: `name${index}`,
                age: Math.floor(Math.random() * 100),
                friend: {
                    name: `friend.Name${index}`,
                    age: Math.floor(Math.random() * 100)
                }
            };
        });

        const tableColumns = [
            {
                Header: "Name",
                accessor: "name" // String-based value accessors!
            },
            {
                Header: "Age",
                accessor: "age"
            },
            {
                Header: "Friend Name",
                accessor: "friend.name"
            },
            {
                Header: "Friend Age",
                accessor: "friend.age"
            }
        ];


        return (
            <FlexBox
                justifyContent={FlexBoxJustifyContent.Center}
                wrap={FlexBoxWrap.Wrap}
            >
                <Card
                    avatar={<Icon name={this.state.chart === "lineChart" ? "line-chart" : "horizontal-bar-chart"} />}
                    heading="Card grafikler"
                    subtitle="tıklayarak değiştirin"
                    style={{ width: "300px", ...spacing.sapUiContentPadding }}
                    headerInteractive
                    onHeaderClick={this.handleHeaderClick} >

                    {
                        this.state.chart === "lineChart" ?
                            <LineChart datasets={datasets} labels={labels} loading={this.state.loading} />
                            :
                            <BarChart datasets={datasets} labels={labels} loading={this.state.loading} />
                    }
                </Card>

                <Card
                    heading="Progress"
                    subtitle="List"
                    style={{ width: "300px", ...spacing.sapUiContentPadding }}
                    avatar={<Icon name="list" />}
                    headerInteractive
                    onHeaderClick={this.handleProgressHeaderClick}
                >
                    <List>
                        <StandardListItem info="finished" infoState={ValueState.Success}>
                            Activity 1
                        </StandardListItem>
                        <StandardListItem info="failed" infoState={ValueState.Error}>
                            Activity 2
                        </StandardListItem>
                        <StandardListItem
                            info="in progress"
                            infoState={ValueState.Warning}
                            style={{ height: "80px" }}>
                            <FlexBox direction={FlexBoxDirection.Column}>
                                <Title level={TitleLevel.H5}>Activity 3</Title>
                                <ProgressIndicator
                                    displayValue="89%"
                                    percentValue={89}
                                    width="180px"
                                    state={ValueState.Success} />
                            </FlexBox>
                        </StandardListItem>
                        <StandardListItem
                            info="in progress"
                            infoState={ValueState.Warning}
                            style={{ height: "80px" }}>
                            <FlexBox direction={FlexBoxDirection.Column}>
                                <Title level={TitleLevel.H5}>Activity 4</Title>
                                <ProgressIndicator
                                    displayValue="5%"
                                    percentValue={5}
                                    width="180px"
                                    state={ValueState.Error} />
                            </FlexBox>
                        </StandardListItem>
                    </List>
                </Card>


                <Card
                    heading="AnalyticalTable"
                    avatar={<Icon name="table-view" />}
                    style={{ width: "900px", ...spacing.sapUiContentPadding }} >
                    <AnalyticalTable
                        data={tableData}
                        columns={tableColumns}
                        visibleRows={5}
                    />
                </Card>
            </FlexBox>
        )
    }
}