function B({ name, age, updateText }) {
    return (
        <div>
            <h4 onClick={() => updateText('9999')}>B组件-点击9999</h4>
            <div>name is: {name}</div>
            <div>age is: {age}</div>
        </div>
    )
}
export default B

// export default React.memo(B)
