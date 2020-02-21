class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        }); 
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visible ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Now Showing</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));


// const appRoot = document.getElementById("app");

// let visible = false;

// const showHide = () => {

//     visible = !visible;
//     render();
// }

// const render = () => {
//     const template = (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={showHide}>
//             {visible ? 'Hide details' : 'Show details'}
//         </button>
//         {
//             visible && (
//                 <div>
//                     <p>These are some details bitch</p>
//                 </div>
//             )
//         }
//       </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();