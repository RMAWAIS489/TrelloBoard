import pkg from 'pg';
const {Pool} = pkg;

export const connection=new Pool({
       user:"postgres",
       password:"root",
       host:"localhost",
       port:5432,
       database:"trelloboard"
});
connection.connect((err)=>{
    if(err){
        console.log('error connecting to the database',err.stack)
        return;
    }
    console.log("connected to the database successfully")
})