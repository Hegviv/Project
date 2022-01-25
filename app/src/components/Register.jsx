const Register = () => {
    return (
        <div>
      <div className="container-fluid">
  <form>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    <a href="/fooldal">Főoldal</a>
  </form>
</div>
        </div>
    )
}

export default Register;
