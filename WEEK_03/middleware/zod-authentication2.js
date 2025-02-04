import {z} from "zod"

const validateInput = (obj) => {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response)
}

validateInput({email: "satyajit@gmail.com", password: "12345678"})

// ------------------Coerciosn

// import {z} from "zod"

// const schema = z.coerce.string()

// const illustrativeSchema = schema.parse(12)

// console.log(typeof illustrativeSchema)