import Modal from '../Modal/modal'
import './homeBody.css'
import { useState } from 'react'

const HomeBody = (props: any) => {
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState('')
  const [element, setElement] = useState({})
  const [Index, setIndex] = useState(0)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Social Media')

  console.log('serachhh', props.clickSearch)

  const currentUser = JSON.stringify(localStorage.getItem('currentUser') || '')

  if (localStorage.getItem(currentUser) === null) {
    localStorage.setItem(currentUser, JSON.stringify([]))
  }

  const previousData: any = JSON.parse(
    localStorage.getItem(currentUser) || '[]',
  )

  const Category = (e: any) => {
    setCategory(e.target.value)
  }

  const categoryData = previousData.filter((ele: any) =>
    ele.sector.toLowerCase().includes(category.toLowerCase()),
  )

  console.log('category', categoryData)

  const filteredData = categoryData.filter((ele: any) =>
    ele.siteName.toLowerCase().includes(search.toLowerCase()),
  )
  console.log(filteredData)

  return (
    <div className="homeBodyContainer">
      <div className="homeBodyHeader">
        <div className="headerBodyTitle">Sites</div>
        <div className="homeBodyCount mobileHomeBodyCount">
          <div className="socialMedia">
            <select className="socialMedia" onChange={Category}>
              <option value="Social Media">Social Media</option>
              <option value="Finance">Finance</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="socialMediaCount">{categoryData.length}</div>
          <div className="socialMediaDropDown">
            <img src={require('../../assets/icons/Path Copy.png')} alt="add" />
          </div>
        </div>
        <div className="headerBodyOptions">
          <div className="headerSearch">
            <input
              type="text"
              className="searchbar"
              placeholder="Search"
              onChange={(e: any) => {
                setSearch(e.target.value)
              }}
            />
            <img
              src={require('../../assets/icons/search.png')}
              alt="search"
              className="searchbarIcn"
            />
          </div>

          {props.clickSearch ? (
            <div className="headerSearchMobile">
              <input
                type="text"
                className="searchbar"
                placeholder="Search"
                onChange={(e: any) => {
                  setSearch(e.target.value)
                }}
              />
              <img
                src={require('../../assets/icons/search.png')}
                alt="search"
                className="searchbarIcn"
              />
            </div>
          ) : (
            ''
          )}
          <div
            className="headerAddButton"
            onClick={() => {
              setModal('Add Site')
              setToggle(true)
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={require('../../assets/icons/add_btn.png')} alt="add" />
          </div>
        </div>
      </div>
      <div className="homeBodyCount">
        <div className="socialMedia">
          <select className="socialMedia" onChange={Category}>
            <option value="Social Media">Social Media</option>
            <option value="Finance">Finance</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="socialMediaCount">{categoryData.length}</div>
        <div className="socialMediaDropDown">
          <img src={require('../../assets/icons/Path Copy.png')} alt="add" />
        </div>
      </div>
      <div className="homeBodyContainerBox">
        <div className="homeBodyContents">
          {JSON.stringify(categoryData) === '[]' ? (
            <div className="homeBodyEmpty">
              <div>Please Click on the “+” symbol to add sites</div>
            </div>
          ) : (
            <div className="cardContainer">
              {filteredData.map((ele: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="cardContents"
                    onClick={() => {
                      setModal('Site Details')
                      setElement(ele)
                      setToggle(true)
                      setIndex(index)
                    }}
                  >
                    <div className="cardUpper">
                      <div className="cardLogo">
                        {' '}
                        {ele.icon !== '' ? (
                          <img src={ele.icon} alt="" />
                        ) : (
                          // eslint-disable-next-line jsx-a11y/alt-text
                          <img
                            src={require('../../assets/icons/Twitter.png')}
                            height="50px"
                            width="50px"
                            style={{
                              backgroundPosition: 'cover',
                              borderRadius: '50%',
                            }}
                          />
                        )}
                      </div>

                      <div className="cardCopyTitle">
                        <div className="cardTitle"> {ele.siteName}</div>
                        <div
                          className="cardCopy"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigator.clipboard.writeText(ele.sitePassword)
                          }}
                        >
                          <img
                            src={require('../../assets/icons/copy.png')}
                            alt="copy"
                          />
                          <div>Copy Password</div>
                        </div>
                      </div>
                    </div>
                    <div className="cardLink">{ele.url}</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        {toggle ? (
          <aside className="modal">
            <Modal props={modal} element={Index} />
            <div className="closeBtnContainer">
              <button
                onClick={() => {
                  setToggle(false)
                }}
                className="closeBtn"
              >
                <img
                  src={require('../../assets/icons/close_btn.png')}
                  alt="close"
                />
              </button>
            </div>
          </aside>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default HomeBody
