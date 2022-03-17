import Document, { Html, Head, Main,  NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link href="/images/favicon.png" rel="icon" />
                
                <title>jb.dash</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}