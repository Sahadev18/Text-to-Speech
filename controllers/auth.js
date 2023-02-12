const base = require('../connection')
const bcrypt = require('bcrypt')
const jwd = require('jsonwebtoken')

exports.register = (req,res) => {
    const{name,email,phno,pass,cpass}=req.body
    base.db.query('SELECT email from users where email=?', [email], async (error, result)=>{
        if(error) console.log(error)
        if(result.length>0) return res.render('register', {
            message: 'This email is already in use'
        })
        else if(pass!==cpass) return res.render('register', {
            message: 'Passwords donot match'
        })

        let hashedPassword = await bcrypt.hash(pass, 8)

        console.log(req.body,hashedPassword)

        base.db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (error, result)=>{
            if(error) console.log(error)
            else{
                console.log(result)
                return res.render('register',{
                    message1: 'User registered'
                })
            }
        })
    })
}

exports.login = (req,res) => {
    const{email,pass}=req.body
    base.db.query('SELECT password from users where email=?', [email], async (error, result)=>{
        if(error) console.log(error)
        if(result.length>0){ 
                var password_hash = result[0]["password"]
                let result1 = await bcrypt.compare(pass, password_hash)
                if(result1===true) return res.render('home')
                else return res.render('login', {
                    message1: 'Wrong Password'
                })
        }
        else{
            return res.render('login', {
                message1: 'Email not registered'
            })
        }
    })
}