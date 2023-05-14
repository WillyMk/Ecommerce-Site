import React, { useState, useEffect } from "react";
import { productsService } from "../../../_services/products_service";
import { Card, Col, Table } from "antd";
import { useNavigate } from "react-router-dom";
import "./products.css";

const Products = () => {
    const start_page = { page: 1, pageSize: 10 };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(start_page);
  const [total_elements, setTotalElements] = useState(10);
  const [searchParams, setSearchParams] = useState(page);
  
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    productsService
      .getProduct(searchParams)
      .then((resp) => {
        setProducts(resp?.data?.content || []);
        setTotalElements(resp?.data?.totalElements || 0);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, [searchParams]);

  const handleTableChange = (data) => {
    let current_page = { page: data.current, pageSize: data.pageSize };
    let params = {
      ...searchParams,
      ...current_page,
    };

    setSearchParams(params);
    setPage(current_page);
  };

  return (
    <div>
      <Card
        title={"Products"}
        extra={
          <>
            <button
              className="button"
              onClick={() => {
                navigate("/products/add", { state: { isAddNew: true } });
              }}
            >
              <div className="button-overlay"></div>
              <span>New Products</span>
            </button>
          </>
        }
      >
        <Col span={24}>
          <Table
            loading={loading}
            pagination={{
                page: page.page,
                pageSize: page.pageSize,
                total: total_elements
            }}
            onChange={handleTableChange}
            bordered  
            size="small"
            columns={productColumns}
            dataSource={products}
            rowKey={(record) => record.id}
          />
        </Col>
      </Card>
    </div>
  );
};

const productColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];
export default Products;
