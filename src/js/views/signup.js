import React from "react";
import mainImg from "../../img/mainImg.jpeg";
import logo from "../../img/logo.png";

import "../../styles/signup.scss";

export const Signup = () => (
	<div className="container-fluid containerForm">
		<div className="signup-form ">
			<form action="" method="post">
				<h2 className="text-center mb-4">Registrate</h2>
				<hr />
				<div className="form-group mt-5">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<span className="fa fa-user" />
							</span>
						</div>
						<input
							type="text"
							className="form-control"
							name="username"
							placeholder="Nombre"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<span className="fa fa-user" />
							</span>
						</div>
						<input
							type="text"
							className="form-control"
							name="username"
							placeholder="Apellido"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fa fa-paper-plane" />
							</span>
						</div>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Correo"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fas fa-phone" />
							</span>
						</div>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Telefono"
							required="required"
						/>
					</div>
				</div>
				<p>Minimo 8 caracteres</p>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fa fa-lock" />
							</span>
						</div>
						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="Contraseña"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fa fa-lock" />
								<i className="fa fa-check" />
							</span>
						</div>
						<input
							type="password"
							className="form-control"
							name="confirm_password"
							placeholder="Confirmar Contraseña"
							required="required"
						/>
					</div>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
					<label className="form-check-label">Quiero registrarme como cliente</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
					<label className="form-check-label">Quiero registrarme como Trabajador</label>
				</div>
				<div className="form-group">
					<label className="form-check-label mt-4">
						<input type="checkbox" required="required" /> He leido y acepto los{" "}
						<a href="#">Terminos y condiciones</a>
					</label>
				</div>
				<div className="form-group d-flex justify-content-center">
					<button type="submit" className="btn btn-primary btn-lg">
						Registrar
					</button>
				</div>
			</form>
		</div>
	</div>
);
