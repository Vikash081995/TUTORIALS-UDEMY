export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => {
  return <Button {...props} color={"red"} />;
};

export const GreenSmallButton = (props) => {
  return <Button {...props} color={"green"} size="small" />;
};
