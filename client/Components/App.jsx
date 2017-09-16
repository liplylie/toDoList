class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos: ""
		}
		this.OnClickEvent = this.OnClickEvent.bind(this);
	}

	componentDidMount(){
		this.getTodos();
	}

	OnClickEvent(todo){
		this.setState({
			todos: todo
		})
	}

	getTodos(){
		var context = this;
		axios.get('/api/todo')
		.then(function(todos){
			context.setState({
				todo:todos,
			})
		});
	}

	postTodos(text){
		axios.post('/api/todo', {
			todo:text
		})
		.then(() => {console.log("post sent")}
		.catch(()=> {console.log("failed")})
	}



  render() {
    return (
	    <h1>{this.state.todos}</h1>;
    )
  }
}