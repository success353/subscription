import supabase from "../../utils/SupabaseClient"

const handler = async (req, res) => {
    const response = await fetch('https://api.paystack.co/customer', {
        method: 'POST',
        headers: {
            Authorization: process.env.PAYSTACK_SECRET_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: req.body.record.id,
            first_name: req.body.record.id,
            last_name: req.body.record.id

        })
    })
    const data = await response.json()
    await supabase.from('profiles').update({ customer: data.data.customer_code }).eq('id', req.body.record.id)
    res.send({ message: `Customer created: ${data.data.customer_code}` })
}

export default handler