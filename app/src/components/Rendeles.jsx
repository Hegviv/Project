const Rendeles = () => {
    return (<>
<div id="al" class="container ">

<div className="container">
      <div className="row">
  <form>
    <div className="form-group">
      <label className="text-light" for="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    <div className="form-group">
      <label className="text-light" for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
    </div>
    <button className="text-dark" type="submit ">Regisztráció</button>
  
  </form>
</div>
        </div>
</div>
    </>
        
    )
}

export default Rendeles;
