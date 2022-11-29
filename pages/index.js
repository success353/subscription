import React, { useState } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'


function Index() {
  const supabase = useSupabaseClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function handleSubmit(e) {
    e.preventDefault()
    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(user)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">SIGNUP</button>
    </form>
  )
}

export default Index