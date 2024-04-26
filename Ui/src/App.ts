import { ref } from "vue"

export const App = () => {
  var project = ref(
    {
      projectBy: "Fupico",
      version: "v0.1.2",
    }

  )

  return {
    project
  }
}




