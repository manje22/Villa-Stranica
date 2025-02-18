function LogInPage(){
    return(
        <div>
            <div>
                <div>Prijava</div>
                <div></div>
            </div>

            <div>
                Email: <br />
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                Lozinka: <br />
                <div>
                    <input
                        type="password"
                        placeholder="Lozinka"
                        value={lozinka}
                        onChange={(e) => setLozinka(e.target.value)}
                    />
                </div>
            </div>

            {error && <div>{error}</div>}

            <div>
                <div onClick={handleSubmit}>
                    Prijava
                </div>
            </div>

            <div>
                <Link to={"/register"}  className={stil.noprofile}>Nemaš profil?</Link>
            </div>
        </div>
    )
}

export default LogInPage;