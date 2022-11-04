import { createSlice } from "@reduxjs/toolkit";


export type QuestionProps = {
    question: string,
    answers: string[]
}

type CourseProps = {
    name: string,
    questions: QuestionProps[]
}

const initialState: CourseProps = {
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
};

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    },
},)

export default courseSlice.reducer;