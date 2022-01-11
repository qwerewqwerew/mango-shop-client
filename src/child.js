function ChildComponent(props) {
	const {name, age} = props;
	return (
		<div>
			<h3>나는 자식입니다.</h3>
            <p>이름은 {name} 이고 나이는{age} 살 입니다</p>
		</div>
	);
}

export default ChildComponent;
