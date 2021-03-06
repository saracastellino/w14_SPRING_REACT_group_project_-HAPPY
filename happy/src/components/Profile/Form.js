//this is the users profile setup form and submit button
import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      dietaryPreferences: "",
      musicType: "",
      fitnessLevel: 0
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleDietaryPreferencesChange = this.handleDietaryPreferencesChange.bind(this);
    this.handleMusicTypeChange = this.handleMusicTypeChange.bind(this);
    this.handleFitnessLevelChange = this.handleFitnessLevelChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  
  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name.trim();
    const age = this.state.age.trim();
    const dietaryPreferences = this.state.dietaryPreferences.trim();
    const musicType = this.state.musicType.trim();
    const fitnessLevel = this.state.fitnessLevel.trim();
    if (!name || !age || !dietaryPreferences || !musicType || !fitnessLevel) {
      return
    }

    this.props.onUserSubmit({
        name: name,
        age: age,
        dietaryPreferences: dietaryPreferences,
        musicType: musicType,
        fitnessLevel: fitnessLevel
    });

    this.setState({
        name: "",
        age: "",
        dietaryPreferences: "",
        musicType: "",
        fitnessLevel: ""
    });
  }

  handleUpdate(event){
    event.preventDefault();
    console.log("update...");
    console.log("name:"+event.target.name.value);
    console.log("age:" + event.target.age.value);
    console.log("dietary:"+event.target.dietary.value);
    console.log("music:"+event.target.music.value);
    console.log("fitness:"+event.target.fitness.value);
    const name = event.target.name.value;
    const age = event.target.age.value;
    const dietaryPreferences = event.target.dietary.value;
    const musicType = event.target.music.value;
    const fitnessLevel = event.target.fitness.value;

    // const name = this.state.name.trim();
    // const age = this.state.age.trim();
    // const dietaryPreferences = this.state.dietaryPreferences.trim();
    // const musicType = this.state.musicType.trim();
    // const fitnessLevel = this.state.fitnessLevel.trim();
    if (!name || !age || !dietaryPreferences || !musicType || !fitnessLevel) {
      return
    }

    this.props.onUserSubmit({
        name: name,
        age: age,
        dietaryPreferences: dietaryPreferences,
        musicType: musicType,
        fitnessLevel: fitnessLevel
    });

  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleDietaryPreferencesChange(event) {
    this.setState({
      dietaryPreferences: event.target.value
    });
  }

  handleMusicTypeChange(event) {
    this.setState({
        musicType: event.target.value
    });
  }

  handleFitnessLevelChange(event) {
    this.setState({
        fitnessLevel: event.target.value
    });
  }

  render() {
     if("" === this.props.user.name){
      return (
        <>
        <h1>First time on Happy?</h1>
        <h3>Please create your profile</h3>
        <form className="profile-form" onSubmit={this.handleSubmit}>
          <h2>Your name: </h2>
          <br/>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br/>
          <h2>Your age: </h2>
          <br/>
          <input
            type="number"
            placeholder="Your age"
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
          <br/>
          <h2>Your dietary habits: </h2>
          <br/>
           <input
            type="string"
            placeholder="Your dietary habits"
            value={this.state.dietaryPreferences}
             onChange={this.handleDietaryPreferencesChange}
          />
          <br/>
          <h2>Your favourit music type: </h2>
          <br/>
           <input
            type="string"
            placeholder="Your favourit music"
            value={this.state.musicType}
             onChange={this.handleMusicTypeChange}
          />
          <br/>
          <h2>Your fitness level</h2>
          <br/>
           <input
            type="number"
            placeholder="Your fitness level"
            value={this.state.fitnessLevel}
             onChange={this.handleFitnessLevelChange}
          />
          <br/>
          <input type="submit" value="Post" className="button"/>
        </form>
        </>
      );
     }else{
       return(
         <>
         <h2>Wish to change your profile?</h2>
         <form className="profile-form-update" onSubmit={this.handleUpdate}>
          <h2>Your name: </h2>
          <br/>
          <input
            type="text"
            placeholder="Your name"
            defaultValue={this.props.user.name}
            name="name"
            onChange={this.handleNameChange}
          />
          <br/>
          <h2>Your age: </h2>
          <br/>
          <input
            type="number"
            placeholder="Your age"
            defaultValue={this.props.user.age}
            onChange={this.handleAgeChange}
            name="age"
          />
          <br/>
          <h2>Your dietary habits: </h2>
          <br/>
           <input
            type="string"
            placeholder="Your dietary habits"
            defaultValue={this.props.user.dietaryPreferences}
             onChange={this.handleDietaryPreferencesChange}
             name="dietary"
          />
          <br/>
          <h2>Your favourite music type: </h2>
          <br/>
           <input
            type="string"
            placeholder="Your favourit music"
            defaultValue={this.props.user.musicType}
             onChange={this.handleMusicTypeChange}
             name="music"
          />
          <br/>
          <h2>Your fitness level</h2>
          <br/>
           <input
            type="number"
            placeholder="Your fitness level"
            defaultValue={this.props.user.fitnessLevel}
             onChange={this.handleFitnessLevelChange}
             name="fitness"
          />
          <br/>
          <input type="submit" value="Post" className="button"/>
        </form>
         </>
       )
     }

   }
}

export default Form;
