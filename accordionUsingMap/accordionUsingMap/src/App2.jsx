import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App2() {

    // const items = [{name: 'linux CNV'}]
    const date = new Date();
    const items = [{ name: 'Linux CNV', dateCreated: `${date}` }, { name: 'Linux CNV Temp', dateCreated: `${date}` }, { name: 'IDE Temp', dateCreated: `${date}` }, { name: 'asd', dateCreated: `${date}` }, { name: 'IDE', dateCreated: `${date}` }, { name: 'asd', dateCreated: `${date}` }];

    return (
        <div className='bg-secondary'>

            <div className="accordion accordion-flush p-3" id="accordionFlushExample">

                {items.map((item, index) => (

                    <div className="accordion-item ">

                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                data-bs-target={`#flush-collapse${index}`}
                                aria-controls={`flush-collapse${index}`}

                            >

                                <div className="d-flex" style={{ width: '100%' }}>
                                    <p style={{ width: "95%" }}>{item.name}</p>

                                </div>
                            </button>
                        </h2>

                        <div
                            id={`flush-collapse${index}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
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

        </div >
    )
}

export default App2