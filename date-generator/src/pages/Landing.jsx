import { getDates, postDate } from "../utils/api";
import { getRandomIndex } from "../utils/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DateCard } from "../components/DateCard";
import "../App.css";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Modal from "react-modal";
import useModal from "../hooks/useModal";
import Heading from "../components/Heading";

export const Landing = () => {
  const [date, setDate] = useState();
  const { modalIsOpen, setIsOpen } = useModal(false);
  const [newDate, setNewDate] = useState({
    title: "",
    address: "",
    description: "",
    price_estimation: 0,
  });
  const [selectedDates, setSelectedDates] = useState([]);

  const displayDate = () => {
    console.log('pressed')
    getDates()
      .then((res) => {
        const randomIndex = getRandomIndex(res.length);
        return setDate(res[randomIndex]);
      })
      .then(() => {
        //NEED TO DO SOMETHING HERE TOO 
        setSelectedDates((currSelectedDates) => {
          return [...currSelectedDates];
        });
      });
  };

  const updateForm = (change) => {
    setNewDate((currDate) => {
      const addedDate = { ...currDate };
      addedDate[change.target.id] = change.target.value;
      return addedDate;
    }).then(() => {
      console.log("in the updateForm");
    });
  };

  const addDate = (event) => {
    event.preventDefault();
    postDate(newDate).then((res) => {
      console.log(res);
      //NEED TO ADD SOMETHING HERE

    });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pop in another date!"
        ariaHideApp={false}
      >
        <h2>Add a new date</h2>
        <form 
          onSubmit={(event) => {
            addDate(event);
            closeModal();
          }}
        >
          <label htmlFor="title">Date Title:</label>
          <input
            value={newDate.title}
            placeholder="name your date"
            onChange={(event) => updateForm(event)}
            id="title"
            className="inputBox"
          ></input>
          <br />
          <br />
          <label htmlFor="address">Date Address:</label>
          <input
            value={newDate.address}
            placeholder="where are we going?"
            onChange={(event) => updateForm(event)}
            id="address"
            className="inputBox"
          >
            {}
          </input>
          <br />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            value={newDate.description}
            placeholder="describe your date idea ... "
            onChange={(event) => updateForm(event)}
            id="description"
            className="inputBox"
          ></input>
          <br />
          <br />
          <label htmlFor="price_estimation">Price:</label>
          <select
            value={newDate.price_estimation}
            onChange={(event) => updateForm(event)}
            id="price_estimation"
            className="selectList"
          >
            <option value="0">£0</option>
            <option value="50">£50</option>
            <option value="100">£100</option>
            <option value="150">£150</option>
            <option value="200">£200</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={(e) => closeModal()}>
          X
        </button>
      </Modal>
      <section>
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={(e) => displayDate(e)}>
          surprise me
        </button>
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={(e) => openModal()}>
          add new date!
        </button>
        <Link to="/dates">
          <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">All dates</button>
        </Link>
        <br></br>
        <br></br>
        <section>{date ? <DateCard date={date} /> : LoadingSpinner()}</section>
      </section>
    </main>
  );
};
