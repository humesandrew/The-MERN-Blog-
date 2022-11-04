import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";

import "./blogdetails.css";

const handleDelete = () => {
  console.info("You clicked the delete icon.");
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function BlogDetails({ blog }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Container>
        <Paper elevation={2}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{ backgroundColor: "lightyellow" }}
            >
              <Typography className="postedDiv">
                <strong>{blog.title} </strong>
                <p>Posted at: {blog.createdAt}</p>{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="topDiv">
                <Typography>{blog.body}</Typography>

                <div className="bottomDiv">
                  <Typography sx={{ marginRight: 3 }}>
                    Written by: {blog.author}
                  </Typography>
                  <Chip
                    label="Delete post"
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                    variant="outlined"
                  ></Chip>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Paper>

        <br></br>
      </Container>
    </div>
  );
}
