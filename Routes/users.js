import express  from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();


let users  = []
//all routes in here are staring with /users
router.get('/',(req, res) => {
    
    res.send(users);
})

router.post('/',(req, res) => {

//console.log(req.body)

const user = req.body;





users.push({...user, id: uuidv4()} );
// users.push()

res.send(` user with username ${user.firstName} added to the database`);
})

router.get('/:id', (req, res) => {

    const { id} = req.params;

    const foundUser =  users.find(user => user.id == id);
    res.send(foundUser);
});

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
    
        // Use !== to correctly compare user.id with id
        users = users.filter((user) => user.id !== id);
    
        res.send(`User with id ${id} deleted`);
    });

    router.patch('/:id', (req, res) =>{
        const { id } = req.params;
        const{firstName}  = req.body;

        const user = users.find((user)=> user.id === id);

            if(firstName) user.firstName = firstName;
            

            res.send(`user is with id ${id} is updated`);
      
    })


export default router;