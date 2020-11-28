import {Command, flags} from '@oclif/command'
import * as chalk from 'chalk'
import {IdeaAPI} from '../api/api-idea'
const {table} = require('table')

export default class List extends Command {
  private ideaApi = new IdeaAPI()

  static description = 'List all of your Ideas'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    this.log(`${chalk.bold.yellow('[!] These are your current ideas!\n')}`)
    const ideaList = this.ideaApi.list()
    const data = [[`💡${chalk.green('Idea')}`]]
    ideaList.forEach(element => {
      data.push([`${element.idea}`])
    })
    this.log(table(data))
  }
}
