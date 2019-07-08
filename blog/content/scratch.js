toggleVisibility(){
    if (this.state.visibility == true) {
        this.setState({
            visibility: false
        })} else {
        this.setState({
            visibility: true
        }),
    }
}

toggleVisibility() {
    if (this.state.visibility == true) {
    this.setState({
      visibility: false
    })} else {
      this.setState({
        visibility: true
      })
    }
  }