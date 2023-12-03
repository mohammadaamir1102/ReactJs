function NestedComponent(){

    function Inner(){
        return (
            <div className="App">
                <h1>This is inner</h1>
            </div>
        );
    }

    return(
        <div className="App">
            <h1>This is outer</h1>
            {Inner()}
        </div>
       
    );
}

export default NestedComponent;