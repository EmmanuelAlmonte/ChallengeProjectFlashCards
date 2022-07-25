import { createSlice } from '@reduxjs/toolkit'

const options = {
  name: 'topics',
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, { payload }) => {
      const { id, name, icon } = payload
      state.topics[id] = { id, name, icon, quizIds: [] }
    },
    addQuizId: (state, { payload }) => {
      const { topicId, quizId } = payload
      state.topics[topicId].quizId.push(quizId)
    }
  }
}

export const topicsSlice = createSlice(options)
export const selectTopics = state => state.topics.topics
export const { addTopic, addQuizId } = topicsSlice.actions
export default topicsSlice.reducer
