import * as React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="dark:bg-gray-900 dark:text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
