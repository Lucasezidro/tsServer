import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseservice'


export function createCourse(req: Request, res: Response){
    
    CreateCourseService.execute({
        name: "nodeJS",
        educator: "Lucas",
        duration: 10
    })

    CreateCourseService.execute({
        name: "ReactJs",
        educator: "Paula",
    })

    return res.send()
}