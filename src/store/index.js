import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		uiState: "start",
		characterChoices: ["gary", "benny", "king"],
		character: "",
		questionIndex: 0,
		score: 0,
		questions: [
			{
				question: `What's your mam's name?`,
				gary: "Dorothy",
				benny: "Patricia",
				king: "Ann",
			},
			{
				question: `What's your favorite hobby?`,
				gary: "Sleeping",
				benny: "Drumming",
				king: "Movies",
			},
			{
				question: `When's ya birthday?`,
				gary: "July",
				benny: "November",
				king: "March",
			},
			{
				question: `What age are you?`,
				gary: "26",
				benny: "At least 50",
				king: "25",
			},
			{
				question: `What appeals to you the most here?`,
				gary: "Making fun of fat people",
				benny: "Terry's chocolate orange",
				king: "Dazed and Confused",
			},
			{
				question: `Wildcard bitch!`,
				gary: "John",
				benny: "is",
				king: "cool",
			},
		],
	},
	mutations: {
		pickCharacter(state, character) {
			state.character = character
		},
		updateUIState(state, uistate) {
			state.uiState = uistate
		},
		pickQuestion(state, character) {
			character === state.character ? (state.score += 13) : (state.score -= 13)

			if (state.questionIndex < state.questions.length - 1) {
				state.questionIndex++
			} else {
				Math.sign(state.score) > 0
					? (state.uiState = "won")
					: (state.uiState = "lost")
			}
		},
		restartGame(state) {
			state.uiState = "start"
			state.score = 0
			state.questionIndex = 0
		},
	},
})
