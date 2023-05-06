import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Component} from 'react'
import './index.css'

class TextEditor extends Component {
  state = {
    p: '',
    bold: false,
    italicStyle: false,
    under: false,
  }

  getData = e => {
    this.setState({
      p: e.target.value,
    })
  }

  getBold = () => {
    const {bold} = this.state

    this.setState({
      bold: !bold,
    })
  }

  getItalic = () => {
    const {italicStyle} = this.state
    this.setState({
      italicStyle: !italicStyle,
    })
  }

  getUnderline = () => {
    const {under} = this.state
    this.setState({
      under: !under,
    })
  }

  render() {
    const {p, bold, italicStyle, under} = this.state
    const boldItem = bold === true && 'yes-bold'
    const italicItem = italicStyle === true && 'yes-italic'
    const underItem = under === true && 'yes-under'
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <div>
          <h1>Text Editor</h1>
          <div className="gh">
            <ul>
              <li>
                <button
                  type="button"
                  data-testid="bold"
                  size={25}
                  onClick={this.getBold}
                  className={bold === true ? 'all-yellow' : 'no-yellow'}
                >
                  <VscBold />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-testid="italic"
                  size={25}
                  onClick={this.getItalic}
                  className={italicStyle === true ? 'all-yellow' : 'no-yellow'}
                >
                  <GoItalic />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-testid="underline"
                  size={25}
                  onClick={this.getUnderline}
                  className={under === true ? 'all-yellow' : 'no-yellow'}
                >
                  <AiOutlineUnderline />
                </button>
              </li>
            </ul>
            <textarea
              rows={4}
              cols={55}
              value={p}
              className={`${boldItem} ${italicItem} ${underItem}`}
              onChange={this.getData}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
