import { createSlice } from "@reduxjs/toolkit";


export type QuestionProps = {
    question: string,
    answers: string[]
}

export type CourseProps = {
    id: string,
    name: string,
    questions: QuestionProps[]
}

type CoursesList = {
    courses: CourseProps[]
}

const initialState: CoursesList = {
    courses: [
        {
            id: '123',
            name: 'Historia',
            questions: [
                {
                    question: 'W ktorym roku byla bitwa pod Grunwaldem?',
                    answers: ['1410', '1400', '1500', '996']
                },
                {
                    question: 'W ktorym roku byl chrzest Polski?',
                    answers: ['996', '1410', '1400', '1500']
                },
            ]
        },
        {
            id: '345',
            name: 'Matematyka',
            questions: [
                {
                    question: 'Ile to jest 2+2?',
                    answers: ['4', '1', '2', '0']
                },
                {
                    question: 'Ile to jest 8:4?',
                    answers: ['2', '8', '4', '3']
                },
            ]
        }
    ]

};

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    },
},)

export default courseSlice.reducer;