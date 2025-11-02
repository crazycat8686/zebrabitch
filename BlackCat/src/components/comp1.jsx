import StyleSheet from "react"
export default function Comp1(props) {
    return (
        <div style={{color : "blue",borderRadius :"16px", width : "50%", marginLeft:"auto", marginRight:"auto"}}>
            {props.children}
        </div>
    )
}
