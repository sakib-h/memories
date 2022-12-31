import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
const New = ({ inputs, title }) => {
	return (
		<div className="new grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="newContainer col-span-9">
				<Navbar />
				<div className="top shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5">
					<h1 className="text-[lightgray] text-[20px]">{title}</h1>
				</div>
				<div className="bottom shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5 lg:grid grid-cols-3 gap-5">
					<div className="left col-span-1 flex justify-center">
						<img
							src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							alt="add"
							className="w-[100px] h-[100px] rounded-full object-cover mb-10"
						/>
					</div>
					<div className="right col-span-2">
						<form
							action=""
							className="form grid grid-cols-2 gap-5 mr-10">
							<div className="formInput">
								<label htmlFor="imageUp flex items-center gap-2.5">
									Upload you Image:{" "}
									<MdOutlineDriveFolderUpload className="inline-block text-[18px] cursor-pointer" />
								</label>
								<input
									type="file"
									name="imageUp"
									id="imageUp"
									className="hidden"
								/>
							</div>
							{inputs.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input
										type={input.type}
										placeholder={input.placeholder}
									/>
								</div>
							))}
							<button className="w-max px-5 py-2 border-none bg-[#7451f8] text-[white] rounded-md font-[700] cursor-pointer mt-2.5">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
