import CountUp from "react-countup";

const style = {
  color: "black",
  fontSize: "20px",
};

const Count = (props) => {
  return (
    <div>
      <p className="header" style={{ textAlign: "center" }}>
        {props.label}：
        <CountUp
          separator=","
          suffix="円"
          delay={0.5}
          start={props.start}
          end={props.end}
          duration={2}
          style={style}
        />
      </p>
    </div>
  );
};

export default Count;
