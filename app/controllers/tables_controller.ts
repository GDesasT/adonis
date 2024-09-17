import type { HttpContext } from '@adonisjs/core/http'

export default class TablesController {

    public async index({ params, response }: HttpContext) {
        const {value1, value2 = null, fibonacci = null} = params

        if (isNaN(value1) || (value2 !== null && isNaN(value2))) {
            return response.status(400).json({ error: 'Los parametros deben de ser numeros enteros' })
        }

        const intValue1 = parseInt(value1)
        const intValue2 = value2 ? parseInt(value2) : null

        if (fibonacci === 'fibonacci') {
            return response.json({ fibonacci: this.fibonacciSequence(intValue1, intValue2) })
        } else if (intValue2 !== null) {
            if (intValue2 < intValue1) {
                return response.status(400).json({ error: 'El segundo parametro debe de ser mayor al primero' })
            }

            const result: { [key: number]: number[] } = {}
            for (let i = intValue1; i <= intValue2; i++) {
                result[i] = this.multiplicationTable(i)
            }

            return response.json(result)
        } else {
            return response.json(this.multiplicationTable(intValue1))
        }
    }

    private multiplicationTable(number: number): number[] {
        const table: number[] = []
        for (let i = 1; i <= 10; i++) {
            table.push( number * i )  
        }
        return table
}

    private fibonacciSequence(start: number, end: number | null): number[] {
        const sequence: number[] = []
        let a = 0, b = 1

        while (a <= (end ?? Number.MAX_SAFE_INTEGER)) {
            if (a >= start) {
                sequence.push(a)
            }

            const next = a + b
            a = b
            b = next
        }

        return sequence
    }
}