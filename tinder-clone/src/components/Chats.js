import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <ChatRow
        name="I"
        message="Lorem ipsum dolor sit amet."
        timeStamp="10 seconds ago"
        img="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/s960x960/117866785_3436302413096502_7526708985598659121_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=tnk6RWxK6IUAX-LIY4O&_nc_ht=scontent-ssn1-1.xx&tp=7&oh=b9d9b3b8f28df4a27d93cb443688a098&oe=5F6F406D"
      />
      <ChatRow
        name="AM"
        message="Lorem ipsum dolor sit amet, consectetur adi..."
        timeStamp="4 minutes ago"
        img="
      https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/117145224_1020521945064896_3705716606192568405_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=YiVvV7qSmCAAX-1CmTX&oh=dee0ec68dcc10e0d2bd2effed650bdf6&oe=5F723533"
      />
      <ChatRow
        name="HORNY"
        message="Mauris in lobortis urna. Nullam rhoncus."
        timeStamp="52 minutes ago"
        img="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/p960x960/106211035_3280031112056967_2145575400029746758_o.jpg?_nc_cat=100&_nc_sid=13bebb&_nc_ohc=sk5_ddVj52IAX96ExZx&_nc_ht=scontent-ssn1-1.xx&tp=6&oh=9937a6d0e8368bcdbfd13a32d2ea4065&oe=5F6D7B22"
      />
      <ChatRow
        name="SEND"
        message="Pellentesque arcu nibh, ultricies ac dui."
        timeStamp="2 hours ago"
        img="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/p720x720/94102815_3087228568003890_6784419311009136640_o.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=430Z9PDhl9EAX_eIIPr&_nc_ht=scontent-ssn1-1.xx&tp=6&oh=09477cb8e43255e3a415536dc6145307&oe=5F6E45B6"
      />
      <ChatRow
        name="NUDES"
        message="Proin sed molestie nulla. Curabitur commodo."
        timeStamp="1 day ago"
        img="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/67476986_2515711881822231_3101183579913191424_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=T0e82rW2Jc0AX-52B4O&_nc_ht=scontent-ssn1-1.xx&oh=6d493f4c8f4f7fb41ccbac4cfa71f94d&oe=5F6FBDC0"
      />
    </div>
  );
};

const ChatRow = ({ name, message, timeStamp, img }) => {
  return (
    <div className="chat__row">
      <Avatar alt="PH" src={img} />
      <div className="chat__details">
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timeStamp}</p>
    </div>
  );
};

export default Chats;
