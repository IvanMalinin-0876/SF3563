import React, { Component } from 'react'
import { List, StandardListItem, ValueState, ShellBar, ShellBarItem, Popover, PlacementType, ProductSwitch, ProductSwitchItem } from '@ui5/webcomponents-react'
import "@ui5/webcomponents-icons/dist/icons/person-placeholder";
import "@ui5/webcomponents-icons/dist/icons/source-code";
import "@ui5/webcomponents-icons/dist/icons/add";
import "@ui5/webcomponents-icons/dist/icons/add-contact";

export default class Navigation extends Component {
    // constructor(props, context) {
    //     super(props, context);

    // }

    handleLogoClick = () => {
        window.location.replace("#/");
    };

    handleContactClick = () => {
        window.location.replace("#/contact");
    };

    render() {
        return (
            <div>
                <ShellBar
                    logo="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEyLjM4IDIwNCI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbC1ydWxlOmV2ZW5vZGQ7fS5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9LmNscy0ze2ZpbGw6IzFlNWZiYjt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjIwNi4xOSIgeDI9IjIwNi4xOSIgeTI9IjIwNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYjhmMSIvPjxzdG9wIG9mZnNldD0iMC4wMiIgc3RvcC1jb2xvcj0iIzAxYjZmMCIvPjxzdG9wIG9mZnNldD0iMC4zMSIgc3RvcC1jb2xvcj0iIzBkOTBkOSIvPjxzdG9wIG9mZnNldD0iMC41OCIgc3RvcC1jb2xvcj0iIzE3NzVjOCIvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzFjNjViZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlNWZiYiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5TQVBfZ3JhZF9SWmVpY2hlbmZsw6RjaGUgMTwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDIwNCAyMDguNDEgMjA0IDQxMi4zOCAwIDAgMCAwIDIwNCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI0NC43MywzOC4zNmwtNDAuNiwwdjk2LjUyTDE2OC42NywzOC4zM0gxMzMuNTFsLTMwLjI3LDgwLjcyQzEwMCw5OC43LDc5LDkxLjY3LDYyLjQsODYuNCw1MS40Niw4Mi44OSwzOS44NSw3Ny43Miw0MCw3MmMuMDktNC42OCw2LjIzLTksMTguMzgtOC4zOCw4LjE3LjQzLDE1LjM3LDEuMDksMjkuNzEsOGwxNC4xLTI0LjU1Qzg5LjA2LDQwLjQyLDcxLDM2LjIxLDU2LjE3LDM2LjE5aC0uMDljLTE3LjI4LDAtMzEuNjgsNS42LTQwLjYsMTQuODNBMzQuMjMsMzQuMjMsMCwwLDAsNS43Nyw3NC43QzUuNTQsODcuMTUsMTAuMTEsOTYsMTkuNzEsMTAzYzguMSw1Ljk0LDE4LjQ2LDkuNzksMjcuNiwxMi42MiwxMS4yNywzLjQ5LDIwLjQ3LDYuNTMsMjAuMzYsMTNBOS41Nyw5LjU3LDAsMCwxLDY1LDEzNWMtMi44MSwyLjktNy4xMyw0LTEzLjA5LDQuMS0xMS40OS4yNC0yMC0xLjU2LTMzLjYxLTkuNTlMNS43NywxNTQuNDJhOTMuNzcsOTMuNzcsMCwwLDAsNDYsMTIuMjJsMi4xMSwwYzE0LjI0LS4yNSwyNS43NC00LjMxLDM0LjkyLTExLjcxLjUzLS40MSwxLS44NCwxLjQ5LTEuMjhMODYuMTcsMTY0LjVIMTIzbDYuMTktMTguODJhNjcuNDYsNjcuNDYsMCwwLDAsMjEuNjgsMy40Myw2OC4zMyw2OC4zMywwLDAsMCwyMS4xNi0zLjI1bDYsMTguNjRoNjAuMTR2LTM5aDEzLjExYzMxLjcxLDAsNTAuNDYtMTYuMTUsNTAuNDYtNDMuMkMzMDEuNzQsNTIuMTksMjgzLjUyLDM4LjM2LDI0NC43MywzOC4zNlpNMTUwLjkxLDEyMWEzNi45MywzNi45MywwLDAsMS0xMy0yLjI4bDEyLjg3LTQwLjU5SDE1MWwxMi42NSw0MC43MUEzOC41LDM4LjUsMCwwLDEsMTUwLjkxLDEyMVptOTYuMi0yMy4zM2gtOC45NFY2NC45MWg4Ljk0YzExLjkzLDAsMjEuNDQsNCwyMS40NCwxNi4xNCwwLDEyLjYtOS41MSwxNi41Ny0yMS40NCwxNi41NyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI1Ny44NCwxOTAuNThhMTAuNzEsMTAuNzEsMCwxLDEsMTAuNzUsMTFBMTAuNzEsMTAuNzEsMCwwLDEsMjU3Ljg0LDE5MC41OFptMTAuNzUsMTMuMjNhMTMuMiwxMy4yLDAsMSwwLTEzLjQxLTEzLjIzQTEzLjE3LDEzLjE3LDAsMCwwLDI2OC41OSwyMDMuODFabS0yLjc5LTEyLjE5aDIuNjVsNCw2LjU5aDIuNjFsLTQuMzYtNi43YzIuMjYtLjI1LDQtMS40Niw0LTQuMTksMC0zLTEuNzgtNC4zMi01LjM2LTQuMzJoLTUuOHYxNS4yMWgyLjNabTAtMlYxODVoMy4xNGMxLjU5LDAsMy4yOS4zNCwzLjI5LDIuMjMsMCwyLjM3LTEuNzMsMi40OC0zLjY2LDIuNDhaIi8+PC9zdmc+"
                    onLogoClick={this.handleLogoClick}
                    profile="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDEyLjM4IDIwNCI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbC1ydWxlOmV2ZW5vZGQ7fS5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6I2ZmZjt9LmNscy0ze2ZpbGw6IzFlNWZiYjt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjIwNi4xOSIgeDI9IjIwNi4xOSIgeTI9IjIwNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYjhmMSIvPjxzdG9wIG9mZnNldD0iMC4wMiIgc3RvcC1jb2xvcj0iIzAxYjZmMCIvPjxzdG9wIG9mZnNldD0iMC4zMSIgc3RvcC1jb2xvcj0iIzBkOTBkOSIvPjxzdG9wIG9mZnNldD0iMC41OCIgc3RvcC1jb2xvcj0iIzE3NzVjOCIvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzFjNjViZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlNWZiYiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5TQVBfZ3JhZF9SWmVpY2hlbmZsw6RjaGUgMTwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDIwNCAyMDguNDEgMjA0IDQxMi4zOCAwIDAgMCAwIDIwNCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI0NC43MywzOC4zNmwtNDAuNiwwdjk2LjUyTDE2OC42NywzOC4zM0gxMzMuNTFsLTMwLjI3LDgwLjcyQzEwMCw5OC43LDc5LDkxLjY3LDYyLjQsODYuNCw1MS40Niw4Mi44OSwzOS44NSw3Ny43Miw0MCw3MmMuMDktNC42OCw2LjIzLTksMTguMzgtOC4zOCw4LjE3LjQzLDE1LjM3LDEuMDksMjkuNzEsOGwxNC4xLTI0LjU1Qzg5LjA2LDQwLjQyLDcxLDM2LjIxLDU2LjE3LDM2LjE5aC0uMDljLTE3LjI4LDAtMzEuNjgsNS42LTQwLjYsMTQuODNBMzQuMjMsMzQuMjMsMCwwLDAsNS43Nyw3NC43QzUuNTQsODcuMTUsMTAuMTEsOTYsMTkuNzEsMTAzYzguMSw1Ljk0LDE4LjQ2LDkuNzksMjcuNiwxMi42MiwxMS4yNywzLjQ5LDIwLjQ3LDYuNTMsMjAuMzYsMTNBOS41Nyw5LjU3LDAsMCwxLDY1LDEzNWMtMi44MSwyLjktNy4xMyw0LTEzLjA5LDQuMS0xMS40OS4yNC0yMC0xLjU2LTMzLjYxLTkuNTlMNS43NywxNTQuNDJhOTMuNzcsOTMuNzcsMCwwLDAsNDYsMTIuMjJsMi4xMSwwYzE0LjI0LS4yNSwyNS43NC00LjMxLDM0LjkyLTExLjcxLjUzLS40MSwxLS44NCwxLjQ5LTEuMjhMODYuMTcsMTY0LjVIMTIzbDYuMTktMTguODJhNjcuNDYsNjcuNDYsMCwwLDAsMjEuNjgsMy40Myw2OC4zMyw2OC4zMywwLDAsMCwyMS4xNi0zLjI1bDYsMTguNjRoNjAuMTR2LTM5aDEzLjExYzMxLjcxLDAsNTAuNDYtMTYuMTUsNTAuNDYtNDMuMkMzMDEuNzQsNTIuMTksMjgzLjUyLDM4LjM2LDI0NC43MywzOC4zNlpNMTUwLjkxLDEyMWEzNi45MywzNi45MywwLDAsMS0xMy0yLjI4bDEyLjg3LTQwLjU5SDE1MWwxMi42NSw0MC43MUEzOC41LDM4LjUsMCwwLDEsMTUwLjkxLDEyMVptOTYuMi0yMy4zM2gtOC45NFY2NC45MWg4Ljk0YzExLjkzLDAsMjEuNDQsNCwyMS40NCwxNi4xNCwwLDEyLjYtOS41MSwxNi41Ny0yMS40NCwxNi41NyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI1Ny44NCwxOTAuNThhMTAuNzEsMTAuNzEsMCwxLDEsMTAuNzUsMTFBMTAuNzEsMTAuNzEsMCwwLDEsMjU3Ljg0LDE5MC41OFptMTAuNzUsMTMuMjNhMTMuMiwxMy4yLDAsMSwwLTEzLjQxLTEzLjIzQTEzLjE3LDEzLjE3LDAsMCwwLDI2OC41OSwyMDMuODFabS0yLjc5LTEyLjE5aDIuNjVsNCw2LjU5aDIuNjFsLTQuMzYtNi43YzIuMjYtLjI1LDQtMS40Niw0LTQuMTksMC0zLTEuNzgtNC4zMi01LjM2LTQuMzJoLTUuOHYxNS4yMWgyLjNabTAtMlYxODVoMy4xNGMxLjU5LDAsMy4yOS4zNCwzLjI5LDIuMjMsMCwyLjM3LTEuNzMsMi40OC0zLjY2LDIuNDhaIi8+PC9zdmc+"
                    show-notifications
                    notificationCount={1}
                    onNotificationsClick={(e) => {
                        // @ts-ignore
                        document.getElementById('item-list-popover').openBy(e.getParameter('targetRef'));
                    }}
                    show-product-switch
                    onProductSwitchClick={
                        (e) => {
                            // @ts-ignore
                            document.getElementById('product-switch-popover').openBy(e.getParameter('targetRef'));
                        }
                    }
                    showCoPilot
                >
                    <ShellBarItem icon="add-contact" text="Ekle" onItemClick={this.handleContactClick} />
                </ShellBar>

                <Popover {...{ id: 'product-switch-popover' }} placementType={PlacementType.Bottom}>
                    <ProductSwitch>
                        <ProductSwitchItem
                            heading="UI5 Web Components Surce Code"
                            targetSrc="https://github.com/ozeraydin57/OA-OpenUI5-ReactJs"
                            target="_blank"
                            icon="source-code"
                        />
                        <ProductSwitchItem
                            heading="Developed by Özer Aydın"
                            subtitle="UI5 component for React Sample"
                            targetSrc="https://ozeraydin.com"
                            target="_blank"
                            icon="person-placeholder"
                        />
                    </ProductSwitch>
                </Popover>

                <Popover {...{ id: 'item-list-popover' }} placementType={PlacementType.Bottom}>
                    <List
                        headerText="Notification"
                    // footerText={text('footerText', 'My Footer Test')}
                    // inset={boolean('inset', false)}
                    // mode={select('mode', ListMode, null)}
                    // noDataText={text('footerText', 'No Data available')}
                    // separators={select('separators', ListSeparators, null)}
                    // onItemClick={action('onItemClick')}
                    // onItemDelete={action('onItemDelete')}
                    // onSelectionChange={action('onSelectionChange')}
                    // header={null}
                    >
                        <StandardListItem info="3" infoState={ValueState.Warning}>
                            Same notification information about
                        </StandardListItem>
                        <StandardListItem>Yeni sipariş eklendi</StandardListItem>
                        <StandardListItem>Kullanım tarihi dolacak</StandardListItem>
                    </List>
                </Popover>
            </div>
        )
    }
}
