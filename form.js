<form className="form" onSubmit={handleSubmit} style={{ marginTop: '70px', marginLeft: '1px', width: '40%', height: '35%', align: 'center', display: 'flex' }}>
        <h1>Contact Us 🤳</h1>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              type="Name"
              name="name"
              label="Name"
              value={name}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.Input
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.Input
              type="phone"
              name="contact_number"
              label="Contact Number"
              value={contact_number}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.DatePicker
              type="date"
              name="Date_of_birth"
              // label="Date_of_birth"
              value={Date_of_birth}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.Input
              type="text"
              name="referal"
              label="Referal Code"
              value={referal}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name="level"
              label="Level"
              value={level}
              items={LevelItem}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}

            />

          </Grid>
        </Grid>



        <Controls.Button
          type="submit"
          style={{ background: " rgb(2, 2, 110)", width: '30%', height: '10%' }}
        >
          Submit
        </Controls.Button>
        <p id="success" style={{ color: 'green' }}></p>

      </form >