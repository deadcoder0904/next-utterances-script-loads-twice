import * as React from 'react'
import Head from 'next/head'

import { DarkMode } from '../components/DarkMode'
import { Utterances } from '../components/Utterances'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Utterances</title>
			</Head>

			<main>
				<h1>Utterances</h1>
				<DarkMode />
				<Utterances />
			</main>
		</div>
	)
}
