import React, { Component } from 'react'
import { Card, Icon, FlexBox, FlexBoxJustifyContent, FlexBoxWrap, FlexBoxDirection } from '@ui5/webcomponents-react'

import { spacing } from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents-icons/dist/icons/contacts";

export default class Contact extends Component {
    render() {
        return (
            <FlexBox
                justifyContent={FlexBoxJustifyContent.Center}
                wrap={FlexBoxWrap.Wrap}
            >

                <Card
                    heading="Contact Information"
                    subtitle="İletişim Bilgileri"
                    avatar={<Icon name="contacts" />}
                    style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }} >

                    <FlexBox direction={FlexBoxDirection.Column} style={{ ...spacing.sapUiContentPadding }}>
                        <p>Buna benzer bir dashboard ekranı için lütfen iletişime geçin</p>

                        ozeraydin57@gmail.com
                        <br />
                        <a href="https://ozeraydin.com" target="_blank" rel="noopener noreferrer">ozeraydin.com</a>
                    </FlexBox>
                </Card>
            </FlexBox>
        )
    }
}
