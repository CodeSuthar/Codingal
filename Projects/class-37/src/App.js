import react from 'react';

class CSS extends react.Component {
    render() {
        const returnCSSBox = (colorOfBox) => {
            return {
                height: "100px",
                width: "100px",
                backgroundColor: colorOfBox,
                margin: "10px",
                display: "inline-block"
            }
        }

        return (
            <span >
                <div style={returnCSSBox("blue")}></div>
                <div style={returnCSSBox("red")}></div>
                <div style={returnCSSBox("green")}></div>
                <div style={returnCSSBox("yellow")}></div>
                <div style={returnCSSBox("purple")}></div>
                <div style={returnCSSBox("orange")}></div>
                <div style={returnCSSBox("pink")}></div>
                <div style={returnCSSBox("brown")}></div>
                <div style={returnCSSBox("black")}></div>
                <div style={returnCSSBox("gray")}></div>
            </span>
        )
    }
}

export default CSS;