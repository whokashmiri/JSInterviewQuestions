//Object is a non-primitive data type in JavaScript. It is a collection of key-value pairs. It is a reference data type.
const person = {
    name:"John",
    age:30,
    age:"32"
}
console.log(person.name); // John
delete person.age;
console.log(person);


db.createCollection("students",
    {validator:
        {$jsonSchema:
            {bsonType:"object",
                required:["name","age","job"],
                properties:
                {name:
                    {
                        bsonType:"string", 
                        description:"Name Should be A String ",
                         maxLength:30
                        },
                        age:{
                            bsonType:"int",
                            description:"Age Should a Number",
                            minimum:12,
                            maximum:50
                        },
                        jod:
                        {
                            bsonType:"date",
                            description:"Should be Date"
                        },
                        course:{
                        bsonType:"array",
                        items:{
                        bsonType:["string"],
                        description:"string"
                    }
                }
                }
            }
        }
    }
)


