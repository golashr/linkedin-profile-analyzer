import { fileURLToPath } from "node:url"
import { Dog } from "./types/Dog.js"

if (fileURLToPath(import.meta.url) === process.argv[1]) {
	const abcd = new Dog('rahul', 'golash')
	console.log(`abcd : ${JSON.stringify(abcd)}`)

	abcd.barkAmount1 = 'golash'
	console.log(`abcd : ${JSON.stringify(abcd)}`)

	abcd.property2 = 'property2'
	console.log(`abcd : ${JSON.stringify(abcd)}`)

	abcd['barkAmount'] = 'barkAmountSEt'
	abcd['barkAmount1'] = 'barkAmount11111SEt'
	console.log(`abcd : ${JSON.stringify(abcd)}`)

	const data =['rahul.golash.2018@gmail.com', 'ryan.gupta.2019@gmail.com']

	const yearOfJoin = data.map((item) => {
		return item.split('@')[0].split('.')[2]
	})

	console.log(`yearOfJoin : ${JSON.stringify(yearOfJoin)}`)
}