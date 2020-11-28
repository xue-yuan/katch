import {Command, flags} from '@oclif/command'
import {IdeaAPI} from '../api/api-idea'
const inquirer = require('inquirer')

export default class Remove extends Command {
  private ideaApi = new IdeaAPI()

  static description = 'Remove your idea from the list'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const ideaList = this.ideaApi.list()
    const choices = ideaList
    const prompt: any = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Remove idea',
        name: 'ideas',
        choices: choices.map(idea => {
          return {name: idea.idea}
        }),
      },
    ])
    const removedIdea = prompt.ideas
    ideaList.forEach((idea, index) => {
      if (removedIdea.indexOf(idea.idea) !== -1) {
        this.ideaApi.mark(index)
      }
    })
    this.ideaApi.remove()
  }
}
