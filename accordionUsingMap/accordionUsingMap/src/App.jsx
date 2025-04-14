import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  //importing bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';         //importing font Awesome for icons
import { useState } from 'react';

function App() {
  const date = new Date();
  const items = [
    { name: 'Linux CNV', dateCreated: `${date}` },
    { name: 'Linux CNV Temp', dateCreated: `${date}` },
    { name: 'IDE Temp', dateCreated: `${date}` },
    { name: 'asd', dateCreated: `${date}` },
    { name: 'IDE', dateCreated: `${date}` },
    { name: 'asd', dateCreated: `${date}` }
  ];

  const [openItem, setOpenItem] = useState(0); // Initially we will open the first item

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? -1 : index); // Toggle the clicked item
  };

  return (
    <div className='bg-secondary'>
      <div className="accordion p-3" id="accordionPanelsStayOpenExample">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                aria-expanded={openItem === index}
                data-bs-target={`#panelsStayOpen-collapse${index}`}
                aria-controls={`panelsStayOpen-collapse${index}`}
                onClick={() => handleToggle(index)}
              >
                <div className="d-flex" style={{ width: '100%' }}>
                  <p style={{ width: "95%" }}>{item.name}</p>
                  <i style={{ fontSize: "24px" }} className="fa p-2">&#xf040;</i>
                  <i style={{ fontSize: "24px" }} className="fa p-2">&#xf014;</i>
                </div>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${index}`}
              className={`accordion-collapse collapse ${openItem === index ? 'show' : ''}`}
            >
              <div className="accordion-body">
                <div className="d-flex flex-row justify-content-between">
                  <div className="p-3">
                    <div>
                      <p className="heading">Name</p>
                      <p className="body">{item.name}</p>
                    </div>
                    <div>
                      <p className="heading">Type</p>
                      <p className="body">{item.name}</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <div>
                      <p className="heading">Created At</p>
                      <p className="body date">{item.dateCreated}</p>
                    </div>
                    <div>
                      <p className="heading">Resources ID</p>
                      <p className="body">...</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <div>
                      <p className="heading">Updated At</p>
                      <p className="body date">{item.dateCreated}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>
                        <p className="heading">Template Data</p>
                        <p className="body"><a href="#">view</a></p>
                      </div>
                      <div>
                        <p className="heading">Operation Name</p>
                        <p className="body">CREATION</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <div>
                      <p className="heading">Created By</p>
                      <p className="body">Name</p>
                    </div>
                    <div>
                      <p className="heading">Operation Status</p>
                      <p className="body">SUCCESS</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <div>
                      <p className="heading">Project ID</p>
                      <p className="body">mk-project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
