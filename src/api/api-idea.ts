import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'

const ideaFile = path.join(os.homedir(), '.katch', 'idea.json')

interface IdeaInterface {
  mark: boolean;
  idea: string;
}

export class IdeaAPI {
  private ideaList: IdeaInterface[] = []

  constructor() {
    this.ideaList = JSON.parse(fs.readFileSync(ideaFile, {encoding: 'utf-8'}))
  }

  private save() {
    if (!fs.existsSync(path.dirname(ideaFile))) {
      fs.mkdirSync(path.dirname(ideaFile))
    }
    const data = JSON.stringify(this.ideaList)
    fs.writeFileSync(ideaFile, data, {
      encoding: 'utf-8',
    })
  }

  public create(idea: string) {
    const newIdea: IdeaInterface = {
      mark: false,
      idea,
    }

    this.ideaList.push(newIdea)
    this.save()
  }

  public remove() {
    this.ideaList = this.ideaList.filter(e => {
      return e.mark === false
    })
    // this.ideaList.splice(index, 1)
    this.save()
  }

  public list() {
    return this.ideaList
  }

  public mark(index: number) {
    this.ideaList[index].mark = true
    this.save()
  }

  public unmark(index: number) {
    this.ideaList[index].mark = false
    this.save()
  }
}
