import { useEffect, useState } from 'react';
import './modal.css';

const Modal = (props: any) => {
  console.log('ele', props);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState({
    siteName: '',
    url: '',
    sector: '',
    userName: '',
    sitePassword: '',
    notes: '',
  });

  const currentUser = localStorage.getItem('currentUser') || '[]';

  const previousData: any = JSON.parse(
    localStorage.getItem(JSON.stringify(currentUser)) || '[]'
  );

  console.log('previous', previousData);

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
  };

  const currentItem = previousData[props.element];
  console.log('current', currentItem);

  const editVal = () => {
    if (props.props === 'Add Site') {
      setEdit(true);
    }
  };

  useEffect(() => {
    editVal();
  });

  const submitHandler = (e: any) => {
    e.preventDefault();

    const newData = {
      siteName: e.target.siteName.value,
      url: e.target.url.value,
      sector: e.target.sector.value,
      userName: e.target.userName.value,
      sitePassword: e.target.sitePassword.value,
      notes: e.target.notes.value,
      icon: '',
    };

    console.log('new data', value);

    if (
      newData.siteName !== '' &&
      newData.url !== '' &&
      newData.userName !== '' &&
      newData.sitePassword !== '' &&
      newData.sector !== ''
    ) {
      if (props.props === 'Add Site') {
        previousData.push(newData);
        console.log('P', previousData);
        localStorage.setItem(
          JSON.stringify(currentUser),
          JSON.stringify(previousData)
        );
      } else if (props.props === 'Site Details') {
        console.log('eleeee', previousData[props.element]);
        previousData[props.element] = newData;
        console.log('replace', previousData);
        localStorage.setItem(
          JSON.stringify(currentUser),
          JSON.stringify(previousData)
        );
      }
    } else {
      alert('Please enter all the required fields');
    }
  };

  return (
    <>
      <div className="modalBody">
        <div className="modalMobileTopbar"></div>
        <div className="modalTitle">{props.props}</div>
        {props.props === 'Site Details' && !edit ? (
          <div className="modaledit">
            <button
              className="modalEditButton"
              onClick={() => {
                setEdit(!edit);
                if (props.props === 'Add Site') {
                  setEdit(true);
                }
              }}
            >
              Edit
            </button>
          </div>
        ) : (
          ''
        )}

        <form className="modalBodyForm" onSubmit={submitHandler}>
          <div className="modalInput occupy">
            <div>URL</div>
            <input
              type="text"
              name="url"
              className="modalInputBar"
              onChange={onChangeHandler}
              value={edit ? value.url : currentItem && currentItem.url}
            />
          </div>
          <div className="modalInput">
            <div>Site Name</div>
            <input
              type="text"
              name="siteName"
              className="modalInputBar"
              onChange={onChangeHandler}
              value={
                edit ? value.siteName : currentItem && currentItem.siteName
              }
            />
          </div>
          <div className="modalInput">
            <div>Sector/Folder</div>

            <input
              type="text"
              name="sector"
              className="modalInputBar"
              onChange={onChangeHandler}
              value={edit ? value.sector : currentItem && currentItem.sector}
            />
          </div>
          <div className="modalInput">
            <div>User Name</div>
            <input
              type="text"
              name="userName"
              className="modalInputBar"
              onChange={onChangeHandler}
              value={
                edit ? value.userName : currentItem && currentItem.userName
              }
            />
          </div>
          <div className="modalInput">
            <div>Site Password</div>

            <input
              type="text"
              name="sitePassword"
              className="modalInputBar"
              onChange={onChangeHandler}
              value={
                edit
                  ? value.sitePassword
                  : currentItem && currentItem.sitePassword
              }
            />
          </div>
          <div className="modalInput occupy">
            <div>Notes</div>
            <textarea className="modalInputBar" name="notes" />
          </div>
          <div></div>
          {props.props === 'Add Site' ? (
            <div className="modalButtons">
              <button className="modalButton modalResetButton">Reset</button>
              <button className="modalButton modalSaveButton" type="submit">
                Save
              </button>
            </div>
          ) : (
            ''
          )}
          {props.props === 'Site Details' ? (
            <div className="modalButtons">
              <button className="modalButton modalSaveButton">Update</button>
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
    </>
  );
};

export default Modal;
