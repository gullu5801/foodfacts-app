import { Component } from "react"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

class ClassFoodCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  // Runs once after component mounts
  componentDidMount() {
    console.log(
      "ClassFoodCard mounted:",
      this.props.product.product_name
    )
  }

  // Runs before component unmounts
  componentWillUnmount() {
    console.log("ClassFoodCard unmounting")
  }

  // Runs when props/state change
  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      console.log("Product changed")
    }
  }

  // Toggle state
  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { product } = this.props
    const { expanded } = this.state

    return (
      <Card onClick={this.toggleExpand} sx={{ cursor: "pointer" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.product_name || "Unknown Product"}
          </Typography>

          {expanded && (
            <Typography variant="body2" color="text.secondary">
              {product.brands || "Unknown Brand"}
            </Typography>
          )}
        </CardContent>
      </Card>
    )
  }
}

export default ClassFoodCard