import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Table from 'react-bootstrap/Table';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default function Home() {
    const [blog, setBlog] = useState([]);
    const getData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await data.json();
      setBlog(jsonData)
    }
    useEffect(() => {
      getData();
  
  
    }, [])
    return (
        <div className='mt-5'>
            <Container className='mt-5'>
                <Row>
                    {
                        blog.map((data, index) => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Header as="h6">{data.id}</Card.Header>
                                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1675453987277-c7a5834daf14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                                        <Card.Body>
                                            <Card.Title>{data.title}</Card.Title>
                                            <Card.Text>
                                                {data.body}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        )}

                    {/* <h1 className='text-center mt-5'>HOME</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr className='mt-5'>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            blog.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table> */}
                </Row>
            </Container>
        </div >
    )
  }
