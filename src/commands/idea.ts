import {Command, flags} from '@oclif/command'
import * as chalk from 'chalk'
import {IdeaAPI} from '../api/api-idea'

export default class Idea extends Command {
  private ideaApi = new IdeaAPI()

  static description = 'Katch your idea now'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'idea'}]

  async run() {
    const {args} = this.parse(Idea)

    if (args.idea) {
      this.ideaApi.create(args.idea)
      this.log(`${chalk.green('[+]')} Added new idea: ${chalk.green(args.idea)}`)
    } else this.log(`${chalk.red('[X]')} Please input your idea`)
  }
}
