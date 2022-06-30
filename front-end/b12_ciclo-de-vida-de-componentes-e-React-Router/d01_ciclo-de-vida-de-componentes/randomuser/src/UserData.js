import React from 'react';

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      apiReturn: '',
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    const requestReturn = await fetch('https://api.randomuser.me/');
    const requestData = await requestReturn.json();
    this.setState ({
      apiReturn: this.getUserElements(requestData.results[0]),
      loading: false,
    });
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return (nextState.apiReturn.age <= 50);
  }

  render() {
    const { apiReturn, loading } = this.state;

    const loadingMessage = <p>Carregando...</p>
    if (loading) return loadingMessage;

    const { name, email, age, image } = apiReturn;
    const userdata = (
      <div>
        <img src={ image } alt={ name }/>
        <p>{ `Name: ${name}` }</p>
        <p>{ `Email: ${email}` }</p>
        <p>{ `Age: ${age}` }</p>
      </div>
    );
    return userdata;
  }
}

export default UserData;
